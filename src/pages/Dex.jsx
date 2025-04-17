import { useState } from "react";
import styled from "styled-components";
import Dashboard from "../components/Dashboard";

const DexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export default function Dex() {
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  return (
    <DexContainer>
      <Dashboard selectedPokemon={selectedPokemon} />
    </DexContainer>
  );
}
