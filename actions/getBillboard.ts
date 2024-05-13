
const PUBLIC_URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

export const getBillboard = async (id: string) => {
    try {
        console.log(`${PUBLIC_URL}/${id}`);
        const res = await fetch(`${PUBLIC_URL}/${id}`);
        
        if (!res.ok) {
            throw new Error(`Failed to fetch billboard (HTTP status ${res.status})`);
        }
        
        return await res.json();
    } catch (error) {
        console.error('Error fetching billboard:', error);
        throw error;
    }
};
