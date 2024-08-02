

const Cards = ({item}) => {

    console.log({item})
  return (
    <>
    <div className="p-4">
    <div className="card w-90 bg-base-100 shadow-xl mt-8 hover:scale-105 duration-100 dark:bg-slate-800 dark:text-white dark:border ">
  <figure><img className="w-96 h-48" src={item.image} alt="bookStore" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge text-white bg-orange-500">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline py-2">${item.price}</div> 
      <div className="badge badge-outline py-3 cursor-pointer hover:bg-orange-400 hover:text-white">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards






