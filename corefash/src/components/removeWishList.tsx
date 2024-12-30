'use client';

export default function RemoveToWishList({ onRemove, id }: { onRemove: () => void; id: string | undefined }) {
  async function handleRemove() {
    const url = process.env.NEXT_PUBLIC_DB_URL + `/api/wishlist?id=${id}`;

    const response = await fetch(url, {
      method: 'DELETE',
    });

    onRemove();
  }

  return (
    <button className="btn" onClick={handleRemove}>
      Remove
    </button>
  );
}
