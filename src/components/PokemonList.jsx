import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { PokemonContext } from "../pages/Dex";

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  background-color: #f0f0f0;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

const PokemonList = () => {
  const { pokemonList, addPokemon } = useContext(PokemonContext);

  return (
    <ListContainer>
      {pokemonList.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          handleonClick={addPokemon}
        />
      ))}
    </ListContainer>
  );
};

export default PokemonList;
