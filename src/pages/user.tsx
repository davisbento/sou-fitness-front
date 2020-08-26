import React from 'react';

function UserPage({ data }) {
  return (
    <div>
      <h1>Usuários</h1>
      <span>Nome: {data.name} </span>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://sou.fitness/api/get-user');
  const data = await res.json();

  return { props: { data } };
}

export default UserPage;
