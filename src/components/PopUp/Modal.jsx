
export default function modal({children,open,onCLose}){
  if(!open)return null
  return(
      <>
          <div>
              {children}
              {/* <button onClick={onCLose}>Close</button> */}
          </div>
      </>
  )
}