import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProjectInfo = () => {
  const projectData = {
    name: "Token Project",
    listingDate: "2024-01-01",
    totalSupply: "1,000,000,000",
    whitePaper: "https://example.com/whitepaper",
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Project Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium">Project Name</h3>
            <p>{projectData.name}</p>
          </div>
          <div>
            <h3 className="font-medium">Listing Date</h3>
            <p>{projectData.listingDate}</p>
          </div>
          <div>
            <h3 className="font-medium">Total Supply</h3>
            <p>{projectData.totalSupply}</p>
          </div>
          <div>
            <h3 className="font-medium">White Paper</h3>
            <a
              href={projectData.whitePaper}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View White Paper
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectInfo;
