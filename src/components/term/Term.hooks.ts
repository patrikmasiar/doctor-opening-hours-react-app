import { generateAndLoadOccupiedTerms } from "api/terms";
import { Moment } from "moment";
import { useEffect, useState } from "react";

export const useTerms = () => {
  const [isLoading, setLoading] = useState(false);
  const [occupiedItems, setOccupiedItems] = useState<Moment[]>([]);

  useEffect(() => {
    loadOccupiedItems();
  }, []);  

  const loadOccupiedItems = async () => {
    setLoading(true);
    const response = await generateAndLoadOccupiedTerms();
    setLoading(false);

    setOccupiedItems(response);
  };

  return {
    isLoading,
    occupiedItems,
  };
};
