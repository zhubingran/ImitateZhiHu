import {Ref, ref,onMounted,onUnmounted} from 'vue'

const userClickOutside = (elementRef:Ref<null | HTMLElement>)=>{
  const isCLickOutside = ref(false)
  const handler = (e:MouseEvent)=>{
    if(elementRef.value){
      if(elementRef.value.contains(e.target as HTMLElement)){
        isCLickOutside.value = false
      }else{
        isCLickOutside.value = true
      }
    }
  }
  onMounted(() => {
    document.addEventListener('click', handler)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handler)
  })
  return isCLickOutside
}

export default userClickOutside