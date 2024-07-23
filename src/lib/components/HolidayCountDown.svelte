<script lang="ts">
    import { onMount } from 'svelte';
    import type { Holiday } from '$lib/types/holiday.d';

    export let holidays: Holiday[];

    let countdown = '';
    let holidayName = '';

    function getNextHoliday(holidays: Holiday[]): Holiday | null {
        console.log(holidays, 'holidays')
        const now = new Date();
        const futureHolidays: Holiday[] = holidays.filter(holiday => new Date(holiday.date) > now);
        console.log(futureHolidays, 'future')
        if (futureHolidays.length === 0) return null;
        return futureHolidays.reduce((prev, curr) => (new Date(prev.date) < new Date(curr.date) ? prev : curr), futureHolidays[0]);
    }

    function updateCountdown() {
        const nextHoliday: Holiday | null = getNextHoliday(holidays);
        console.log(nextHoliday);
        if (nextHoliday) {
            const now = new Date();
            const nextHolidayDate = new Date(nextHoliday.date);
            const timeRemaining = nextHolidayDate.getTime() - now.getTime();
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
    }

    onMount(() => {
        updateCountdown();
        const interval = setInterval(updateCountdown, 100000);
        return () => clearInterval(interval);
    });

    $: updateCountdown();
</script>

<section>
    <div class="rounded-md  p-4 text-center">
        <div class="font-bold mb-2">Next Holiday: {holidayName}</div>
        <div>{countdown}</div>
    </div>
</section>
