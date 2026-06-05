function Header(){

    return(
        <div className="Header">

            <img src = "https://i.pinimg.com/736x/05/71/89/057189610e860c8a86b4fef2b70d0947.jpg"/> 

            <div className="catagories"> 

                <button> MEN </button> 
                <button> WOMEN </button>
                <button> KIDS</button>
                <button> HOME </button>
                <button> BEAUTY </button>
                <button> GENZ </button>
            </div> 

            <input placeholder="Search for products , brands and more "/> 

            <div className="options">

                <button> Profile </button> 
                <button> Wishlist </button>
                <button> Bag</button>

            </div>
            
        </div>

    )
} 

// Exporting it 
export default Header ;