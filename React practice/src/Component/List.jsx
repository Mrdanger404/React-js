
const date = new Date();
const GetDate = date.getDate();
const GetYear = date.getFullYear();
const GetMonth = date.getMonth();
const GetHours = date.getHours();
const GetMinutes = date.getMinutes();
const GetSeconds = date.getSeconds();
const GetMillisec = date.getMilliseconds();

function List(props) {
    const {username,about,email,phone} = props;
    return ( 
        <>
            <div className="container">
            <p className="username">{username}</p>
            <p className="about">{about}</p>
            <p className="email"><a href="email:">{email}</a></p>
            <p className="phone"><a href="tel:">{phone}</a></p>
            <p className="date">Date {GetDate}/{GetMonth}/{GetYear}</p>
            <p className="time">Time {GetHours} : {GetMinutes} : {GetSeconds} : {GetMillisec}</p>
            </div>
        </>
     );
}

export default List;