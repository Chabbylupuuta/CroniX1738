*CHANGES MADE TO THE STYLE FILE*
nav-links ul{
-MOVED LIST-STYLE TO .NAV-links ul li secton.
-added margin-left: 60px;
-added float: left;
-removed display: in-block;
-removed padding: 8px 12px;
-removed position: relative;
-added line-height: 100px;
}
.nav-links ul li a{
-changed color from white to #1e1e1e;
-font-size to 14px from 13px
-added   font-family: Arial, Helvetica, sans-serif;
-added padding: 0 20px;
}
created 
ul li a:hover {
    color: red;
}
deleted:
/* Header styling 
.header {
    min-height: 100vh;
    width: 100%;
    background-image: linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url(NEWS__IMG/disk.jpg);
    background-position: center;
    background-size: cover;
    position: relative; 
}*/
and added:
/*style the header*/
header{
    background-color: rgb(30, 77, 233);
    padding: 30px;
    text-align: center;
    font-size: 35;
    color: white;
}
deleted :

/* Navigation styling 
nav {
    display: flex;
    padding: 2% 6%;
    justify-content: space-between;
    align-items: center; font-weight: bold; text-shadow: #2477a7;
    background-color: #2771e0;
}*/
added:

nav {
    background: #0082e6;
    width: 100%;
    height: 80p;
}
-added background color: blue in nav{}