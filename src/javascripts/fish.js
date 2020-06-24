// this is the individual fish card so I don't have to repeat HTML code

const Fish = (fish) => `
      <section class="fish-card">
          <div>
              <img class="fish__image" src="${fish.image}" alt="">
          </div>
          <div class="fish-name ${fish.name}">${fish.name}</div>
              <div>Species: ${fish.species}</div>
              <div>Location: ${fish.locationHarvested}</div>
              <div>Length: ${fish.length}</div>
              <div>Food: ${fish.diet}</div>
          </dialog>
      </section>
  `;

export default Fish;
