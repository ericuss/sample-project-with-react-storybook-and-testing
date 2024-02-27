import { FC, useEffect, useState } from 'react';
import { useCharacters } from '@pages/Characters/hooks';
import './index.scss';



export const Characters: FC = () => {

  const { fetchCharacters, characters } = useCharacters();


  useEffect(() => {
    fetchCharacters();
  }, [])

  if(!characters.isLoaded) return <div>loading....</div>;
  if(characters.hasErrors) return <div>Error page</div>;

  return (
    <article>
      <h1>Characters</h1>
      <div>
        <ul>
          {
            characters.data?.results.map(c => <li>{c.name} - {c.species}</li>)
          }
        </ul>
      </div>
    </article>
  )
};

