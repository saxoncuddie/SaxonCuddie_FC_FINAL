import React from "react";
import "../styles/fishcreek.css"; // Ensure the path to CSS is correct

const Shop = () => {
    return (
        <div id="wrapper">
            <main>
                <h2>Shop at Fish Creek Animal Clinic</h2>
                <div className="product-grid">
                    <section className="product">
                        <h3>Fish Creek Tote Bag</h3>
                        <img
                            src="/fishtote.gif"
                            alt="Fish Creek Tote Bag"
                            width="200"
                            height="200"
                        />
                        <p>
                            Carry your pet supplies and accessories in a special tote from Fish
                            Creek. 100% cotton. $14.95
                        </p>
                        <button>Add to Cart</button>
                    </section>
                    <section className="product">
                        <h3>Fish Creek Sweatshirt</h3>
                        <img
                            src="/fishsweat.gif"
                            alt="Fish Creek Sweatshirt"
                            width="200"
                            height="200"
                        />
                        <p>
                            A Fish Creek sweatshirt will warm you up on cool morning walks with
                            your pet. 100% cotton. Size XL. $29.95
                        </p>
                        <button>Add to Cart</button>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Shop;
