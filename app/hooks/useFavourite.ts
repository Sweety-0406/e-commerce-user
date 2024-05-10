import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { Product } from '../types'
import toast from 'react-hot-toast'

interface CartState {
  items: Product[]
  addItem: (data:Product) => void
  removeItem:(id:string) => void
}

const useFavouriteStore = create(
  persist<CartState>((set,get)=>({
    items:[],
    addItem:(data:Product) => {
      const currentCarts = get().items;
      const isExistNewCart = currentCarts.find((item)=>item.id === data.id);
      if(isExistNewCart){
        return toast("Product is already exist in the cart")
      }
      set({items: [...get().items,data]})
      toast.success("successfully added in the wishlist.")
    },
    removeItem:(id:string)=>{
      const currentItems = get().items;
      const restItems = currentItems.filter((item)=>item.id !== id)
      set({items:[...restItems]})
      toast.success("successfully removed from wishlist.")
    },
    }),
    {
      name:'FavouriteProducts',
      storage: createJSONStorage(()=>localStorage)
    }
  )
)


export default useFavouriteStore
