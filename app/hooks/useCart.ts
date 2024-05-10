



import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { Product } from '../types'
import toast from 'react-hot-toast'

interface CartState {
  carts: Product[]
  addCart: (data:Product) => void
  removeCart:(id:string) => void
  removeAll: () => void
}

const useCartStore = create(
  persist<CartState>((set,get)=>({
    carts:[],
    addCart:(data:Product) => {
      const currentCarts = get().carts;
      const isExistNewCart = currentCarts.find((item)=>item.id === data.id);
      if(isExistNewCart){
        return toast("Product is already exist in the cart")
      }
      set({carts: [...get().carts,data]})
      toast.success("successfully added in the cart.")
    },
    removeCart:(id:string)=>{
      const currentCarts = get().carts;
      const restCarts = currentCarts.filter((item)=>item.id !== id)
      set({carts:[...restCarts]})
    },

    removeAll:()=>{
      set({carts:[]})
    }
    }),
    {
      name:'cartProducts',
      storage: createJSONStorage(()=>localStorage)
    }
  )
)


export default useCartStore
