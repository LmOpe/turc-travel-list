export default function Stats({ items }) {
    const numItems = items.length;
    const numPackedItems = items.filter(item => item.packed).length;
    const percentPacked = numPackedItems > 0 ? (Math.round((numPackedItems / numItems) * 100)) : 0;
    return (
        <footer className="stats">
            <em>
                {numItems === 0 ? "Start adding some items to your packing list 🚀"
                    : percentPacked === 100 ? "You got everything ready to go ✈"
                        : `💼 You have ${numItems} items on your list, and you already packed ${numPackedItems}
                        (${percentPacked}%)`}

            </em>
        </footer>
    )
}