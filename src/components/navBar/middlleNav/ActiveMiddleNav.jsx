import "./activeNavBar.scss"
import {BiSearch} from  "react-icons/bi"
import {IconContext} from "react-icons";

export function ActiveMiddleNav() {

	return (
		<>
			<div className="activeCont">
				<div className="activeContWrapper">
					<div className="child1">
						<lable>Where</lable>
						<input type="text" placeholder="Search destination"/>
					</div>

					<div className="child2">
						<div className="subChild1">
							<lable>Check in</lable>
							<p>Add dates</p>
						</div>
						<div className="subChild2">
							<lable>check out</lable>
							<p>Add dates</p>
						</div>
					</div>
					<span className="line"></span>
					<div className="child3">
						<div className="lables">
							<lable>Who</lable>
							<p>Add guest</p>
						</div>
						<IconContext.Provider value={{color: "#fff",className:"search"}}>
							<button><BiSearch/></button>
						</IconContext.Provider>

					</div>
				</div>
			</div>
		</>
	)
}