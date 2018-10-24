import React, { Component } from "react";
import Category from "../Category/Category";
import "./Categories.css";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: []
    };
  }

  componentDidMount() {
    let categoryArray = [];
    // if I were to grab from props
    // let data = this.props.categories;
    let data = [
      {
        id: "1",
        name: "Meats",
        image:
          "https://schwans-prod.imgix.net/images/modifiers/images/000/000/003/original/SchwansFood_Meat1.jpg?ch=Width%2CDPR%2CSave-Data&auto=format%2Ccompress&dpr=2&w=200"
      },
      {
        id: "2",
        name: "Seafood",
        image:
          "https://schwans-prod.imgix.net/images/modifiers/images/000/000/004/original/SchwansFood_Seafood1.jpg?ch=Width%2CDPR%2CSave-Data&auto=format%2Ccompress&dpr=2&w=200"
      },
      {
        id: "3",
        name: "Meals",
        image:
          "https://schwans-prod.imgix.net/images/modifiers/images/000/000/005/original/SchwansFood_Meals1.jpg?ch=Width%2CDPR%2CSave-Data&auto=format%2Ccompress&dpr=2&w=200"
      },
      {
        id: "4",
        name: "Fruits & Vegetables",
        image:
          "https://schwans-prod.imgix.net/images/modifiers/images/000/000/006/original/SchwansFood_Veg1.jpg?ch=Width%2CDPR%2CSave-Data&auto=format%2Ccompress&dpr=2&w=200"
      },
      {
        id: "5",
        name: "Sides",
        image:
          "https://schwans-prod.imgix.net/images/modifiers/images/000/000/007/original/SchwansFood_Sides1.jpg?ch=Width%2CDPR%2CSave-Data&auto=format%2Ccompress&dpr=2&w=200"
      },
      {
        id: "6",
        name: "Pizza",
        image:
          "https://schwans-prod.imgix.net/images/modifiers/images/000/000/008/original/SchwansFood_Pizza1.jpg?ch=Width%2CDPR%2CSave-Data&auto=format%2Ccompress&dpr=2&w=200"
      },
      {
        id: "7",
        name: "Snacks & appetizers",
        image:
          "https://schwans-prod.imgix.net/images/modifiers/images/000/000/009/original/SchwansFoods_Appetizers1.jpg?ch=Width%2CDPR%2CSave-Data&auto=format%2Ccompress&dpr=2&w=200"
      },
      {
        id: "8",
        name: "Breakfast",
        image:
          "https://schwans-prod.imgix.net/images/modifiers/images/000/000/010/original/SchwansFood_Breakfast.jpg?ch=Width%2CDPR%2CSave-Data&auto=format%2Ccompress&dpr=2&w=200"
      },
      {
        id: "9",
        name: "Ice Cream & Treats",
        image:
          "https://schwans-prod.imgix.net/images/modifiers/images/000/000/002/original/SchwansFood_IceCream1.jpg?ch=Width%2CDPR%2CSave-Data&auto=format%2Ccompress&dpr=2&w=200"
      },
      {
        id: "10",
        name: "Desserts",
        image:
          "https://schwans-prod.imgix.net/images/modifiers/images/000/000/001/original/SchwansFood_Desserts1.jpg?ch=Width%2CDPR%2CSave-Data&auto=format%2Ccompress&dpr=2&w=200"
      },
      {
        id: "11",
        name: "EGift Card",
        type: "large",
        image:
          "https://schwans-assets-prod.imgix.net/assets/merchants/campaign/schwans-egift-wide-84610e32b39ad4380870239380d4ebe4.jpg?ch=Width%2CDPR%2CSave-Data&auto=format%2Ccompress&dpr=2&w=425"
      }
    ];
    data.forEach((item, index, arr) => {
      if (index % 2) {
        categoryArray.push([data[index - 1], data[index]]);
      } else if (Object.is(arr.length - 1, index) && data.length % 2) {
        categoryArray.push([data[index]]);
      }
    });
    this.setState({
      categoryList: categoryArray
    });
  }
  render() {
    return (
      <div>
        {this.state.categoryList.map((elem, index, arr) => {
          if (
            Object.is(arr.length - 1, index) &&
            this.props.categories.length % 2
          ) {
            return (
              <div className="categories">
                <Category
                  category={elem[0]}
                  givePercentage={this.props.givePercentage}
                />
                <div style={{ width: "50%", margin: "1rem" }} />
              </div>
            );
          } else {
            return (
              <div className="categories">
                <Category
                  category={elem[0]}
                  givePercentage={this.props.givePercentage}
                />
                <Category
                  category={elem[1]}
                  givePercentage={this.props.givePercentage}
                />
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default Categories;
