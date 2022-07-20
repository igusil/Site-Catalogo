const menu = [
  {
    id: 1,
    title: "KAIAK",
    category: "Colônias",
    price: 139.99,
    img: "./images/kkkk.png",
    desc: ` Kaiak tem uma fragrância hiper aquática. Combinação icônica de notas aromáticas, cítricas e aquosas, que juntas trazem um potente frescor. Agora em nova embalagem, com tampa mais fácil de abrir. O oceano nos deu a vida, ele é nosso respiro. Está na hora de retribuir. Ouça o chamado do oceano! `,
  },
  {
    id: 2,
    title: "ARBO",
    category: "Colônias",
    price: 119.99,
    img: "./images/arbo1.jpg",
    desc: `Ideal para quem não abre mão de uma fragrância fresca e que liberta da rotina, Arbo é uma marca feita para quem ama estar em contato com o ar das montanhas, a queda d’água das cachoeiras, a brisa do mar ou do ambiente energizante e revigorante da natureza. Conheça as fragrâncias e escolha a sua favorita! `,
  },
  {
    id: 3,
    title: "EKOS MARACUJÁ",
    category: "Desodorantes",
    price: 97.55,
    img: "./images/ekos.jpg",
    desc: `Com extrato aromático de maracujá, vindo da polpa deste fruto tipicamente brasileiro, esta fragrância revela notas encantadoras, delicadas e refrescantes. Tranquilidade e paz reinam no coração dessa mulher. E que coração lindo ela tem, tão lindo quanto ela. Em tempos de tempestade o seu nome é calmaria. Mulher brasileira que traz a suavidade e exuberância de ser ela mesma.`,
  },
  {
    id: 4,
    title: "KAIAK PULSO",
    category: "Colônias",
    price: 89.99,
    img: "./images/kaiakp.jpg",
    desc: `Uma fragrância Aromático Verde Moderada. Um frescor energético e impactante. Notas aquosas, ervas, especiarias frescas, sândalo e cedro pulsam na composição desta fragrância. `,
  },
  {
    id: 5,
    title: "EGEO",
    category: "Colônias",
    price: 119.99,
    img: "./images/egeo.jpg",
    desc: `Uma combinação dos cheiros do marshmallow, do sorvete de framboesa, do algodão-doce e da baunilha, perfeita para você seduzir de maneira divertida! `,
  },
  {
    id: 6,
    title: "EKOS CASTANHA",
    category: "Colônias",
    price: 97.55,
    img: "./images/ekos3.jpg",
    desc: `O frescor das frutas recém-colhidas combinados ao leite de castanha confortável e caloroso...um banho envolvente. O caminho olfativo da Natura para esta fragrancia é Adocicado Refrescante.`,
  },
  {
    id: 7,
    title: "COLÔNIA MAMÃE E BEBÊ",
    category: "Colônias",
    price: 8.99,
    img: "./images/mm.jpg",
    desc: `Aconchego e cuidado em uma fragrância levemente cítrica, que combina flores suaves de lavanda com notas levemente adocicadas. `,
  },
  {
    id: 8,
    title: "Hidratante nativaSPA",
    category: "Hidratantes",
    price: 57.99,
    img: "./images/spa.jpg",
    desc: `A Nativa SPA Ameixa Loção Hidratante Corporal Desodorante é intensidade e vibração. É um cheiro que desperta e, ao mesmo tempo, dá vontade de fechar os olhos. `,
  },
  {
    id: 9,
    title: "LOVE LILY",
    category: "Hidratantes",
    price: 98.99,
    img: "./images/lily.jpg",
    desc: `Composto por Manteiga Karité que cria uma película protetora e Vitamina E, o creme corporal proporciona pele protegida e hidratação por até 48 horas, tem rápida absorção para uma sensação de pele sequinha.`,
  },
  {
    id: 10,
    title: "EKOS MARACUJÁ HIDRATANTE",
    category: "Hidratantes",
    price: 55.99,
    img: "./images/ekosh.jpg",
    desc: `Ekos Hidratante Corporal Maracujá' 400ml Com óleo de maracujá, este néctar hidrata a pele por 30 horas. Com textura leve e sedosa, possui ação desodorante e rápida absorção. Com óleo de maracujá, este néctar hidrata a pele por 30 horas.`,
  },
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
