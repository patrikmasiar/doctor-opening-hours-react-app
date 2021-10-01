import { generateAndLoadOccupiedTerms } from "api/terms";
import { useEffect, useState } from "react";

export const useTerms = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [occupiedItems, setOccupiedItems] = useState([]);

  useEffect(() => {
    loadOccupiedItems();
  }, []);  

  const loadOccupiedItems = async () => {
    const response = await generateAndLoadOccupiedTerms();

    console.log(response);
  };

  return {};
};
