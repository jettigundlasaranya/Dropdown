import React from 'react';

export const Dropdown = () => {
    return (
        <nav>
        <div id="menu-bar">
         <ul>
             <li class="active"><a href="#" id="text1">Home page</a></li>
             <li><a href="#">Left dropdown</a>
             <div class="submenu">
                <ul>
                    <li><a href="#"> Any page</a></li>
                    <li class="hoverme"><a href="#"> Second level</a>
                    <div class="submenu1">
                <ul>
                    <li><a href="#"> Any page</a></li>
                    <li><a href="#"> Third level</a></li>
                    <li><a href="#"> Another page</a></li>
                </ul>
                     </div>
                    </li>
                    <li><a href="#"> Another page</a></li>
                </ul>
             </div>
             </li>
             <li><a href="#"> Mega Menu </a></li>
             <li><a href="#"> Any page </a></li>
             <li><a href="#"> Right dropdown</a></li>
         </ul>
         </div>
        </nav>
    )
}
export default Dropdown