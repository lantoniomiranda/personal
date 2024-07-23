<script>
	import { page } from '$app/stores';
	import '../../app.css';
    import { onMount } from 'svelte';
    import { HOLIDAYS_API_KEY } from '$env/static/private'


    let countdown = '';
    let holidayName = '';

    async function fetchHolidays(){
        const response = await fetch(`https://api.api-ninjas.com/v1/holidays?country=PT&year=2024&type=national_holiday`, {
            headers: {
                'X-Api-Key': `${HOLIDAYS_API_KEY}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch holidays');
        }

        const holidays = await response.json();
        return holidays;
    }

    function getNextHoliday(holidays) {
        const now = new Date();
        const futureHolidays = holidays.filter(holiday => new Date(holiday.date) > now);
        const nextHoliday = futureHolidays.reduce((prev, curr) => (new Date(prev.date) < new Date(curr.date) ? prev : curr), futureHolidays[0]);

        return nextHoliday;
    }

    function updateCountdown() {
        fetchHolidays().then(holidays => {
        const nextHoliday = getNextHoliday(holidays);
        if (nextHoliday) {
            const now = new Date();
            const timeRemaining = new Date(nextHoliday.date) - now;

            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            countdown = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            holidayName = nextHoliday.name;
        } else {
            countdown = 'No upcoming holidays';
            holidayName = '';
        }
        });
    }

    onMount(() => {
        updateCountdown();
        const interval = setInterval(updateCountdown, 1000000);
        return () => clearInterval(interval);
    });


</script>

<section>
    <div class="rounded-md  p-4 text-center">
        <div class="font-bold mb-2">Next Holiday: {holidayName}</div>
        <div>{countdown}</div>
    </div>
</section>

  