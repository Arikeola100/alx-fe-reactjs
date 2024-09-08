function UserProfile() {
    return (
      <div className="bg-gray-100 p-8 max-w-sm mx-auto, my-20 rounded-lg shadow-lg md:max-w-sm md:p-8 sm:p-4 sm:max-w-xs hover:shadow-xl ">
        <img src="https://via.placeholder.com/150" alt="User" className="rounded-full w-36 h-36 mx-auto md:w-36 md:h-36 sm:w-24 sm:h-24 hover:scale-110 transition-transform duration-300 ease-in-out "/>
        <h1 className="text-xl text-blue-800 my-4 md:text-xl sm:text-lg hover:text-blue-500 ">John Doe</h1>
        <p className="text-gray-600 text-base md:text-base sm:text-sm ">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  
  export default UserProfile;