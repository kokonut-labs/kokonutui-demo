import Profile03 from "@/components/kokonutui/profile-03";
import AlertItem from "@/components/ui/toast-custom";
export default function SettingsPage() {
    return (
        <Profile03
            defaultValues={{
                name: "Dorian Baffier",
                username: "dorian_baffier",
                avatar: "/av.png",
                bio: "I made this website",
            }}
        />
    );
}
