import React from "react";
import nopicture from "../../../Assets/no-picture.png";
import "./Categories.css";

const Categories = (props) => {
  const { restoData, cartData, setCart } = props;

  // Retirer les catégories sans meals à l'intérieur
  const filteredRestoData = restoData.categories.filter((category) => {
    return category.meals.length > 0;
  });

  return (
    <div className="CategoriesWrapper">
      {filteredRestoData.map((meal) => {
        return (
          <div key={meal.name} className="category">
            <h1 className="categoryTitle">{meal.name}</h1>
            <div className="mealBoxGroup">
              {meal.meals.map((element) => {
                return (
                  <div
                    className="mealBox"
                    key={element.id}
                    onClick={() => {
                      //Créer copie
                      const newCart = [...cartData];
                      // Rechercher si produit déjà ajouté dans panier
                      let isInCart = false;
                      for (let i = 0; i < cartData.length; i++) {
                        if (element.id === cartData[i].id) {
                          //le produit y est dja donc incrémenter uniquement la qtité
                          newCart[i].quantity++;
                          isInCart = true;
                          break;
                        }
                      }
                      // Si produit inexistant dans le panier
                      if (isInCart === false) {
                        newCart.push({
                          id: element.id,
                          title: element.title,
                          price: element.price,
                          quantity: 1,
                        });
                      }

                      setCart(newCart);
                    }}
                  >
                    <div key={element.id}>
                      <h3>{element.title}</h3>
                      <p className="description">{element.description}</p>
                      <p>
                        {element.price} €{" "}
                        <span>{element.popular ? "⭐ Populaire" : ""}</span>
                      </p>
                    </div>
                    {/* Photo */}
                    <img
                      src={element.picture ? element.picture : nopicture}
                      alt=""
                      className="mealPicture"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
