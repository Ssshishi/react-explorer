import React, { FormEvent, useEffect, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import logoImg from '../../assets/images/princess.png';
import * as S from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

function Home(): JSX.Element {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');

  // 以函数形式初始化 很棒
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@GithubExplorer:repositories'
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories)
    );
  }, [repositories]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      if (!newRepo) {
        setInputError('enter the Repository name');
        return;
      }

      // 解构赋值 用在API数据读取上 也非常棒
      const { data } = await api.get<{ items: Repository[] }>(
        `search/repositories?q=${newRepo}&per_page=6`
      );

      const { items } = data;

      setRepositories(items);
      setNewRepo('');
      setInputError('');
    } catch (err) {
      setInputError('Error searching for this repository');
    }
  }

  return (
    <>
      <S.Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/hunt/">
          <div>git小猎手</div>
        </Link>
      </S.Header>
      <S.Title>Github搜索仓库</S.Title>

      {/* 双感叹号才能真正的将他转换成对应的Boolean值，第一个感叹号是将其转化成Boolean类型的值，
          但是这一操作得到的是其取反以后的值，再进行一次取反运算才能得到其对应真正的布尔值
       */}
      <S.Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          type="text"
          placeholder="输入仓库名称"
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
        />
        <button type="submit">搜索</button>
      </S.Form>

      {inputError && <S.Error>{inputError}</S.Error>}

      <S.Repositories>
        {repositories.map(repository => (
          <Link
            to={`/repository/${repository.full_name}`}
            key={repository.full_name}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </S.Repositories>
    </>
  );
}

export default Home;
