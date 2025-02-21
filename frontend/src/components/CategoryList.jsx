import { Link } from "react-router-dom"

const CategoryList = ()=>{
    const categoryProduct = ["airpods", "camera", "earphones", "mobile", "mouse", "printer", "processor", "refrigerator", "speaker", "telivision", "trimmer", "watch"]

    return(
        <div className="container mx-auto py-4">
            <div className="flex items-center gap-4 justify-between overflow-scroll scrollbar-none">
                {
                    categoryProduct.map((product, index)=>{
                        return(
                            <Link to={"/category-products?category="+product} className="cursor-pointer group" key={product} >
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden p-4 bg-slate-200 flex items-center justify-center">
                                    <img src={`/categories/${product}.webp`} alt={product} className="h-full object-scale-down mix-blend-multiply group-hover:scale-125 transition-all" />
                                </div>
                                <p className="text-center text-sm md:text-base capitalize">{product}</p>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CategoryList