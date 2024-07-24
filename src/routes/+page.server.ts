import { error } from '@sveltejs/kit'; 
import type { PageServerLoad } from './$types';
import { NINJAS_API_KEY, HOLIDAYS_API_URL } from '$env/static/private';
import type { Holiday } from '$lib/types/holiday';

export const load: PageServerLoad = async ({ params }) => {
    const holiday_type = "national_holiday"
    const year = new Date().getFullYear();
    const res = await fetch(HOLIDAYS_API_URL + `&year=${year}` + `&type=${holiday_type}`, {
        headers: {
            'X-Api-Key': `${NINJAS_API_KEY}`
        }
    })
    
    const holidays: Promise<Holiday[]> = await res.json();
    
    if(holidays) {
        return {
            data: holidays
        }
    }

    error(404, 'Not found');
};