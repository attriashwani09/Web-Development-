
// Make 2 Element with Js and the append them to root 

// const Header1 = document.createElement("h1") ;
// Header1.style.backgroundColor  = "pink" ;
// Header1.style.color = "white" ;
// Header1.style.fontSize = "30px" ; 
// Header1.innerText = "Hello Coder Army " ;


// const Header2 = document.createElement("h1") ;
// Header2.style.backgroundColor  = "black" ;
// Header2.style.color = "white" ;
// Header2.style.fontSize = "30px" ; 
// Header2.innerText = "How are you ? " ; 


// const root = document.querySelector(".root") ;

// root.append(Header1) ;
// root.append(Header2) ;



// Now lets Create some Objects ( means REact Object as DEmo ) instaed of this  long code to sove our time and space  

// object to create elements and add style and text to them 
const React = {

    CreateElement : function( tag , styles , info ){

        const element = document.createElement( tag ) ; 

        for(let key in styles ){

            element.style[key] = styles[key] ;

        } 


        if( typeof info === "object" ){ 

            for(let li of info ){
                
                element.append( li ) ;

            }

        }
        else
        element.innerText = info ;

        return element ;
    }
} 


// Object to render ( means appending into any element ) 

const ReactDom = {

    render : function( element , root ){

        root.append(element);

    }
}


// Add normal H1 Tags 
const Header1 = React.CreateElement( "h1" , {backgroundColor : "pink" , color : "white" , fontSize : "30px" } , "Hello Coder Army" ) ;
const Header2 = React.CreateElement( "h1" , {backgroundColor : "black" , color : "white" , fontSize : "30px" } , "How are you ? " ) ; 


// Suppose we have to add Un-ordered List 
const li1 = React.CreateElement("li" , {} , "HTML" ) ;
const li2 = React.CreateElement("li" , {} , "CSS" ) ;
const li3 = React.CreateElement("li" , {} , "JavaScript" ) ;


// Add Ul 
const Ul = React.CreateElement( "ul" , {backgroundColor : "red" , color : "white" , fontSize : "15px" } , [ li1 , li2 , li3 ]  ) ;



// getting access of element , where we have to append 
const root = document.querySelector(".root") ; 


// appending with render Object 
ReactDom.render( Header1 , root ) ;
ReactDom.render( Header2 , root ) ; 
ReactDom.render( Ul , root ) ;

