export default function Map() {
    return (
        <div className="bg-white px-4 md:px-6 py-10">
        <div className="flex flex-col gap-8 mx-auto max-w-screen-xl">
        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-center">
            Find os her
          </p>
        <iframe
        class="h-full w-full min-h-[500px] rounded-lg shadow-lg"
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJE0tPQhZSUkYRZ4aD_7DVKN8&amp;key=AIzaSyCjJJ273kEePGsPvG4fqoIEnSaUf5xSPwk"
      ></iframe>
      </div>
      </div>
    );
}