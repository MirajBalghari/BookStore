import React from "react";
import Books from '../../public/images/book.jpg'

const Cards=({item})=>{
   
    return(
        <>
        <div className="my-3 p-3  ">
        <div className="card bg-base-100 w-92  dark:bg-slate-900 dark:text-white dark:border shadow-xl hover:scale-105 duration-200">
  <figure>
    <img
      src={Books}
      alt="books" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline  px-2 py-1 mt-2">{item.price}</div>
      <div className="cursor-pointer px-2 py-1 rounded-full border-[2px]  hover:bg-pink-500 hover:text-white duration-200 ">Buy Now</div>
    </div>
  </div>
</div>
        </div>
        </>
    )
};
export default Cards;