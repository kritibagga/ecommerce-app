const initialState = {
	cartItems: [], //selected items
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case "INCREMENT":
			return {
				...state,
				cartItems: state.cartItems.map((item) =>
					item.id === action.payload.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				),
			};

		case "DECREMENT":
			return {
				...state,
				cartItems: state.cartItems.map((item) =>
					item.id === action.payload.id
						? { ...item, quantity: item.quantity - 1 }
						: item
				),
			};

		case "ADD_TO_CART":
			// Check if the product is already in the cart
			const existingItem = state.cartItems.find(
				(item) => item.id === action.payload.id
			);

			if (existingItem) {
				// If the item is already in the cart, update the quantity
				return {
					...state,
					cartItems: state.cartItems.map((item) =>
						item.id === action.payload.id
							? { ...item, quantity: item.quantity + 1 }
							: item
					),
				};
			} else {
				// If the item is not in the cart, add it
				return {
					...state,
					cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
				};
			}

		case "REMOVE_FROM_CART":
			// Remove the item from the cart
			return {
				...state,
				cartItems: state.cartItems.filter(
					(item) => item.id !== action.payload.id
				),
			};

		case "CLEAR_CART":
			// Clear the entire cart
			return {
				...state,
				cartItems: [],
			};

		default:
			return state;
	}
};

export default cartReducer;
