import { fetchWithErrorHandling } from "@core/http/handleError";
import { Maybe } from "@core/types/Maybe";
import { useCallback, useState } from "react";
import { CharacterResponse } from "./types";

type UseCharactersProps = {
    characters: Maybe<CharacterResponse | null>;
    fetchCharacters: () => Promise<void>;
};

const url = 'https://rickandmortyapi.com/api/character';
export function useCharacters(): UseCharactersProps {
    const [characters, setCharacters] = useState<Maybe<CharacterResponse | null>>({ isLoaded: false, hasErrors: false, data: null });

    const fetchCharacters = useCallback(async () => {
        let data: CharacterResponse | null = null;

        try {
            const response = await fetchWithErrorHandling(url);

            if (response.status === 200) {
                data = await response.json();
            }

            setCharacters({ isLoaded: true, hasErrors: false, data: data || null });
        } catch (error) {
            console.error(error);
            setCharacters({ isLoaded: true, hasErrors: true, data: null });
            //TODO: Redirect to Error Page.
        }

        // if (data == null || data.title == '') {
        //     navigate({
        //         pathname: `/`,
        //         search: document.location.search
        //     });
        // }
    }, []);

    return {
        fetchCharacters,
        characters,
    };
}