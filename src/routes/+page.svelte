<script>
    import { page } from '$app/stores';
    import user from '$lib/images/user.png';
    import HolidayCountDown from '$lib/components/HolidayCountDown.svelte';
</script>

<svelte:head>
    
</svelte:head>

<section class="flex flex-col">
    <div class="flex justify-between items-center">
        <img src={user} alt="User icon" class="h-32 w-32 rounded-full" />
        <div class="text-content">
            <p class="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <p class="text-lg">Nisi quas nesciunt voluptatum, vitae dicta, fuga non deserunt impedit perspiciatis, quae dolorum accusamus quos odit.</p>
            <p class="text-lg">Tempora sit ut a saepe provident!</p>
        </div>
    </div>
    <div class="flex justify-center">
        <div class="countdown-container flex flex-wrap gap-4">
            <div class="countdown-item p-4 rounded-md">
                <HolidayCountDown />
            </div>
        </div>
    </div>
</section>
