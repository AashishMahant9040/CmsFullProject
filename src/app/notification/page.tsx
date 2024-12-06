import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trash2 } from 'lucide-react';


import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"




const Page = () => {

    const date = new Date();

    const data = [
        {
            name: "Dummy User 1",
            image: "",
            message: "Your account settings have been successfully updated. Please review the changes to ensure everything is correct. If you didn’t make these changes, contact support immediately. Stay tuned for updates on our latest features, and don’t forget to explore new settings for a personalized experience. Thank you for using our service!",
            date: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
        },
        {
            name: "Dummy User 2",
            image: "",
            message: "Your account settings have been successfully updated. Please review the changes to ensure everything is correct. If you didn’t make these changes, contact support immediately. Stay tuned for updates on our latest features, and don’t forget to explore new settings for a personalized experience. Thank you for using our service!",
            date: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
        },
        {
            name: "Dummy User 3",
            image: "",
            message: "Your account settings have been successfully updated. Please review the changes to ensure everything is correct. If you didn’t make these changes, contact support immediately. Stay tuned for updates on our latest features, and don’t forget to explore new settings for a personalized experience. Thank you for using our service!",
            date: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
        },
        {
            name: "Dummy User 4",
            image: "",
            message: "Your account settings have been successfully updated. Please review the changes to ensure everything is correct. If you didn’t make these changes, contact support immediately. Stay tuned for updates on our latest features, and don’t forget to explore new settings for a personalized experience. Thank you for using our service!",
            date: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
        },
        {
            name: "Dummy User 5",
            image: "",
            message: "Your account settings have been successfully updated. Please review the changes to ensure everything is correct. If you didn’t make these changes, contact support immediately. Stay tuned for updates on our latest features, and don’t forget to explore new settings for a personalized experience. Thank you for using our service!",
            date: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
        },
        {
            name: "Dummy User 6",
            image: "",
            message: "Your account settings have been successfully updated. Please review the changes to ensure everything is correct. If you didn’t make these changes, contact support immediately. Stay tuned for updates on our latest features, and don’t forget to explore new settings for a personalized experience. Thank you for using our service!",
            date: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
        },
        {
            name: "Dummy User 7",
            image: "",
            message: "Your account settings have been successfully updated. Please review the changes to ensure everything is correct. If you didn’t make these changes, contact support immediately. Stay tuned for updates on our latest features, and don’t forget to explore new settings for a personalized experience. Thank you for using our service!",
            date: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
        },
        {
            name: "Dummy User 8",
            image: "",
            message: "Your account settings have been successfully updated. Please review the changes to ensure everything is correct. If you didn’t make these changes, contact support immediately. Stay tuned for updates on our latest features, and don’t forget to explore new settings for a personalized experience. Thank you for using our service!",
            date: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
        },
        {
            name: "Dummy User 9",
            image: "",
            message: "Your account settings have been successfully updated. Please review the changes to ensure everything is correct. If you didn’t make these changes, contact support immediately. Stay tuned for updates on our latest features, and don’t forget to explore new settings for a personalized experience. Thank you for using our service!",
            date: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
        },
        {
            name: "Dummy User 10",
            image: "",
            message: "Your account settings have been successfully updated. Please review the changes to ensure everything is correct. If you didn’t make these changes, contact support immediately. Stay tuned for updates on our latest features, and don’t forget to explore new settings for a personalized experience. Thank you for using our service!",
            date: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
        },
        {
            name: "Dummy User 11",
            image: "",
            message: "Your account settings have been successfully updated. Please review the changes to ensure everything is correct. If you didn’t make these changes, contact support immediately. Stay tuned for updates on our latest features, and don’t forget to explore new settings for a personalized experience. Thank you for using our service!",
            date: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
        },
        {
            name: "Dummy User 12",
            image: "",
            message: "Your account settings have been successfully updated. Please review the changes to ensure everything is correct. If you didn’t make these changes, contact support immediately. Stay tuned for updates on our latest features, and don’t forget to explore new settings for a personalized experience. Thank you for using our service!",
            date: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
        },

    ]


    return (
        <div className='w-full h-full text-gray-200 p-20 pt-2'>
            <div className='max-w-[800px]'>
                <h2 className='my-10 text-5xl font-semibold'>Notification</h2>
                {
                    data.map((data, index) => (
                        <div className={`my-2 p-4 border-b-[1px] border-gray-800 ${index < 5 ? "bg-gray-900" : ""}`}>
                            <div className='flex flex-row items-center gap-5 justify-between'>

                                <div className='flex flex-row items-center gap-2'>
                                    <Avatar>
                                        <AvatarImage src={data.image ? data.image : "https://github.com/shadcn.png"} />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p>Notification from {data.name}</p>
                                        <p className='text-xs text-gray-400'>{data.date}</p>
                                    </div>
                                </div>



                                <AlertDialog>

                                    <AlertDialogTrigger>
                                        <Trash2 className='w-5 h-5 text-gray-500 hover:text-red-500 cursor-pointer' />
                                    </AlertDialogTrigger>

                                    <AlertDialogContent>

                                        <AlertDialogHeader>
                                            <AlertDialogTitle></AlertDialogTitle>
                                            <AlertDialogDescription>
                                                This action cannot be undone. This will permanently delete your account
                                                and remove your data from our servers.
                                            </AlertDialogDescription>
                                            <AlertDialogDescription>
                                                This action cannot be undone. This will permanently delete your account
                                                and remove your data from our servers.
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>

                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                            <AlertDialogAction>Continue</AlertDialogAction>
                                        </AlertDialogFooter>

                                    </AlertDialogContent>

                                </AlertDialog>


                            </div>

                            <div className='text-gray-400 text-sm my-2'>
                                <p>{data.message}</p>
                            </div>
                        </div>
                    ))
                }

            </div>

        </div>
    )
}

export default Page