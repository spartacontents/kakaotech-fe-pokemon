import { useState, useContext, createContext } from "react";
import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";

const DexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const PokemonContext = createContext();

export default function Dex() {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = (pokemon) => {
    if (selectedPokemon.length >= 6) {
      alert("포켓몬은 최대 6개까지만 선택될 수 있어요.");
    } else if (selectedPokemon.includes(pokemon)) {
      alert("이미 선택된 포켓몬 입니다.");
    } else {
      setSelectedPokemon([...selectedPokemon, pokemon]);
    }
  };

  const removePokemon = (pokemon) => {
    setSelectedPokemon(selectedPokemon.filter((p) => p.id !== pokemon.id));
  };

  return (
    <PokemonContext.Provider
      value={{
        selectedPokemon,
        removePokemon,
        addPokemon,
        pokemonList: MOCK_DATA,
      }}
    >
      <DexContainer>
        <Dashboard />
        <PokemonList />
      </DexContainer>
    </PokemonContext.Provider>
  );
}
