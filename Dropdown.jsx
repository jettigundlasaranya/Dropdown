import React from 'react';

export const Dropdown = () => {
    return (
        <div id="body">
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
            <form>
                <div id="div1">
                <h1>Add a New Category</h1>
                <div class="mb-3">
                    <label for="Categoryname" class="form-label">Category Name</label> <br />
                    <input type="email" class="form-control" id="Categoryname" aria-describedby="emailHelp" />
                </div> <br/>
                <div class="mb-3">
                    <label for="Pcategory" class="form-label">Parent Category</label> <br />
                    <select name="" id="selectd">
                        <option value="">Choose a parent</option>
                        <option value="">1</option>
                        <option value="">2</option>
                    </select>
                </div> <br/>
                <button type="submit" class="addbtn">Add Category</button>
                </div>
            </form>
        </div>
    )
}
export default Dropdown