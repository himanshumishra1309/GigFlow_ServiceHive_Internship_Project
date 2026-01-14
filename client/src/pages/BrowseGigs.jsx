import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import GigCard from "../components/GigCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import { getAllGigs } from "../service/service";

const BrowseGigs = () => {
  const [gigs, setGigs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const fetchGigs = async (search = "") => {
    try {
      setIsLoading(true);
      setError("");
      const response = await getAllGigs(search);
      setGigs(response.data.gigs || []);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch gigs");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGigs();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    fetchGigs(query);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <section className="bg-gradient-to-r from-royal-blue to-royal-blue/90 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-bone mb-4">
            Browse Gigs
          </h1>
          <p className="text-xl text-powder-blue">
            Find your next opportunity from hundreds of available projects
          </p>
        </div>
      </section>

      <section className="flex-1 bg-bone py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <SearchBar onSearch={handleSearch} />
          </div>

          {error && <ErrorMessage message={error} />}

          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-royal-blue">
                    Available Gigs
                  </h2>
                  <p className="text-royal-blue opacity-70">
                    Showing {gigs.length} results
                  </p>
                </div>
              </div>

              {gigs.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-2xl text-royal-blue opacity-70">
                    No gigs found
                  </p>
                  <p className="text-royal-blue opacity-50 mt-2">
                    Try adjusting your search criteria
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {gigs.map((gig) => (
                    <GigCard key={gig._id} gig={gig} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default BrowseGigs;
