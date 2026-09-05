import BottomSection from "../../Layout/BottomSection"
import ContinueLearning from "../../Layout/ContinueLearning"
import Courses from "../../Layout/Courses"
import Stats from "../../Layout/Stats"
import Welcome from "../../Layout/Welcome"

const Dashboard = () => {


    return (
        <div className="space-y-8">

            <Welcome />

            <Stats />

            <ContinueLearning />

            <Courses />

            {/* <BottomSection /> */}

        </div>
    )
}

export default Dashboard
