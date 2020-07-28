export async function catchTheApi(url) {
	return new Promise((resolve, reject) => {
		fetch(url)
			.then(res => res.json())
			.then(data => resolve(data))
	})
}


export async function getPokemon(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data.abilities.map((a) => {
          fetch(a.ability.url)
            .then((res) => res.json())
            .then((abilityData) => {
              resolve(
                (data = { ...(a.ability = { ...a.ability, abilityData }) })
              );
            });
        });
        return resolve(data);
      });
  });
}