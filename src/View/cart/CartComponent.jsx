import PropTypes from "prop-types";
import { useContext } from "react";
import { cartContext } from "../../Context/Cart";
import { X } from "lucide-react";

export default function CartComponent({ showModal, toggle }) {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(cartContext);

  return (
    showModal && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="w-full max-w-lg bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center border-b pb-4">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Shopping Cart
            </h1>
            <button
              onClick={toggle}
              className="text-gray-600 dark:text-gray-400 hover:text-red-500"
            >
              <X size={24} />
            </button>
          </div>
          <div className="mt-4 space-y-4 max-h-80 overflow-y-auto">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center p-2 border rounded-lg bg-gray-100 dark:bg-gray-800"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-16 h-16 rounded-md object-cover"
                    />
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                        {item.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      className="px-3 py-1 bg-gray-700 text-white rounded-md hover:bg-gray-600"
                      onClick={() => addToCart(item)}
                    >
                      +
                    </button>
                    <span className="text-gray-800 dark:text-white font-medium">
                      {item.quantity}
                    </span>
                    <button
                      className="px-3 py-1 bg-gray-700 text-white rounded-md hover:bg-gray-600"
                      onClick={() => removeFromCart(item)}
                    >
                      -
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 dark:text-gray-400">
                Your cart is empty.
              </p>
            )}
          </div>
          {cartItems.length > 0 && (
            <div className="mt-6 border-t pt-4 flex flex-col gap-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Total: ${getCartTotal()}
              </h2>
              <button
                className="w-full py-2 bg-red-600 text-white font-bold rounded-md hover:bg-red-500"
                onClick={clearCart}
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </div>
    )
  );
}

CartComponent.propTypes = {
  showModal: PropTypes.bool,
  toggle: PropTypes.func,
};
