
import React, { useEffect, useState } from 'react';
import { useFirebaseAuth } from '../Auth/AuthProvider';
import { AiOutlineDelete } from 'react-icons/ai'; 
import axios from 'axios'; 
import Swal from 'sweetalert2';
import Aos from 'aos';

const GameWatchList = () => {
  const { user } = useFirebaseAuth();
  const email = user?.email;
  const[loading, setLoading] = useState(false);

  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    if (email) {
      setLoading(true);
      axios
        .get(`http://localhost:5000/watchlist/${email}`)
        .then((response) => {
         
          if (Array.isArray(response.data)) {
            setWatchlist(response.data);
            setLoading(false);
          } else {
            console.error('Error: The response data is not an array');
            setLoading(false);
          }
        })
        .catch((error) => {
          setLoading(false);
          console.error("Error fetching watchlist: ", error)});
          
    }
  }, [email]);





  const handleDelete = async (gameId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/watchlist/${gameId}`)
          .then(result => {
            if (result.data.success) {
              Swal.fire({
                title: "Deleted!",
                text: "Removed from WishList Successfully",
                icon: "success",
              });
              setWatchlist(prevReviews => prevReviews.filter(wishList => wishList._id !== gameId));
            } else {
              Swal.fire({
                position: "top-center",
                icon: "error",
                title: "Something went wrong. Please try again.",
                showConfirmButton: false,
                timer: 1500
              });
            }
          });
      }
    });
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
}, []);


if(loading){
  return <div className="min-h-screen flex items-center justify-center bg-[#151515] ">
  <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#A91D3A]"></div>
</div>
}

  return (
    <div className=" mx-auto px-4 py-8  min-h-screen">
      <h1 className="text-3xl font-bold text-[#A91D3A] text-center mb-6">My Game Watchlist</h1>
      
      <div className="overflow-x-auto md:overflow-hidden md:w-10/12 mx-auto">
        <table className="min-w-full  shadow-lg rounded-lg "  data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
          <thead className="border-b-2 border-[#A91D3A]">
            <tr  data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
              <th className="px-4 py-2 text-center">Game Cover</th>
              <th className="px-4 py-2 text-center">Game Title</th>
              <th className="px-4 py-2 text-center">Genre</th>
              <th className="px-4 py-2 text-center">Rating</th>
              <th className="px-4 py-2 text-center">Added On</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
        
            {Array.isArray(watchlist) && watchlist.length > 0 ? (
              watchlist.map((game) => (
                <tr key={game._id} className="border-b border-[#333] hover:text-white hover:bg-[#2d2c2c] " 
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom">
                  <td className="px-4 py-2 flex justify-center mx-auto">
                    <img
                      src={game.gameCover}
                      alt={game.gameTitle}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  </td>
                  <td className="px-4 py-2 text-center">{game.gameTitle}</td>
                  <td className="px-4 py-2 text-center">{game.genre}</td>
                  <td className="px-4 py-2 text-center">{game.rating}/5</td>
                  <td className="px-4 py-2 text-center">{new Date(game.addedAt).toLocaleDateString()}</td>
                  <td className="px-4 py-2 text-center">
                    <button
                      onClick={() => handleDelete(game._id)}
                      className="text-red-600 hover:text-red-800 transition"
                    >
                      <AiOutlineDelete size={20} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center px-4 py-2">No games in your watchlist.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GameWatchList;

