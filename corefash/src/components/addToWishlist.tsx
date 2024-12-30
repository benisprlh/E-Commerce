'use client';
export default function AddToWishList({ productId }: { productId: string | undefined }) {
  const url = process.env.NEXT_PUBLIC_DB_URL + `/api/wishlist?productId=${productId}`;
  async function handleWishList() {
    const response = await fetch(url, {
      method: 'POST',
    });
    const message = await response.json();
    console.log(message, "<<<<, ini messagenya")
  }

  return (
    <div>
      <button className="btn" onClick={handleWishList}>
        Add
      </button>
    </div>
  );
}
