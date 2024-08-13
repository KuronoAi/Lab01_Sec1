import { useState } from "react";
import {bookinfo} from "./book";



function CheckS({sugg} : {sugg:boolean}){
    if(sugg)
        return (
     <>
         |  Suggest  
         </>
     );
     else
         return (
     <>
         | Not Suggest  
             </>
     );
}
function CheckB({best} : {best:boolean}){
    if(best)
        return (
     <>
        |  Best Sellers
         </>
     );
     else
         return (
     <>
             
             </>
     );
}



function Item ({ code,title,desc,cov,cate,aut,pub,pri,best,sugg } : { code:Number,title: string,desc: string,cov: string,cate: number,aut:String,pub:String,pri:String,best:boolean,sugg:boolean }) {
  
      const [like, setLike] = useState(false)
      function handleClicklike () {
          if(like)
              setLike(false);
          else
              setLike(true);
      }
     return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
    <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"  title={title}>
    </div>
    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div className="mb-8">
        <p className="text-sm text-gray-600 flex items-center">
        <CheckS sugg={sugg}/>
        <CheckB best={best}/>
        </p>
        
        <div className="text-gray-900 font-bold text-xl mb-2">Book : {title}</div>
        <p className="text-gray-700 text-base"> Cover : {cov}</p>
        <p className="text-gray-700 text-base">Description : {desc}</p>
        <p className="text-gray-700 text-base">Author : {aut}</p>
        <p className="text-gray-700 text-base">Publishing : {pub}</p>
        <p className="text-gray-700 text-base">Price : {pri}</p>
      </div>  
        </div>
      </div>

    
     )
  }
  
  export default function book() {
  const enrItem = bookinfo.filter(bookinfo => 
      bookinfo.suggestions === true ||
      bookinfo.bestsellers === true
  
  );
  
      const items = enrItem.map(item =>
        <Item key={item.code} code={item.code} title={item.title} desc={item.description} cov={item.cover} cate={item.category} aut={item.author} pub={item.publishing} pri={item.price} best={item.bestsellers} sugg={item.suggestions}/>
      );
      return (
      <div className="p-5 bg-green-200">
          <h1 className="text-xl font-bold">Book Lists:</h1>
          <ul>{items}</ul>
          </div>
      );
  }    
