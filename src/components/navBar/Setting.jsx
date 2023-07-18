import  './setting.scss'

export function Setting({values}) {
 console.log(values);
  return (
      <>
        <div className={!values? "setting open":"setting"}>
          <div className="settingWrapper">
            <div className="section1">
              <p>Sign up</p>
              <p>Login</p>
            </div>
            <div className="line"></div>
            <div className="section2">
              <p>Airbnb your home</p>
              <p>Setting</p>
            </div>
          </div>
        </div>
      </>
  )
}