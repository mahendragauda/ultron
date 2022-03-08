import { useRouter } from "next/router";

const Category = () =>{

    const route = useRouter();
    const subroute = route.query.worldnews;
    return(
<>

<h1>{subroute} page</h1>

</>



    );
};
export default Category;


