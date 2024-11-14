import Card_01 from "@/components/kokonutui/card-01";
import List01 from "@/components/kokonutui/list-01";
import List02 from "@/components/kokonutui/list-02";
import AlertItem from "@/components/ui/toast-custom";

export default function MePage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Overview
                </h1>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Here you can view and manage all your important information.
                </p>
            </div>
            {/* First row with two columns */}
            <div className="grid grid-cols-2 gap-6">
                <div className="bg-white dark:bg-[#0F0F12] rounded-lg p-6 min-h-[200px] flex items-start flex-col justify-start border border-gray-200 dark:border-[#1F1F23]">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 text-left">
                        My latest notifications
                    </h2>
                    <List01 />
                </div>
                <div className="bg-white dark:bg-[#0F0F12] rounded-lg p-6 min-h-[200px] flex items-start justify-start border border-gray-200 dark:border-[#1F1F23]">
                    <List02 />
                </div>
            </div>

            {/* Second row full width */}
            <div className="bg-white dark:bg-[#0F0F12] rounded-lg p-6 min-h-[200px] flex items-start justify-start border border-gray-200 dark:border-[#1F1F23]">
                <Card_01 />
            </div>
            <AlertItem />
        </div>
    );
}
