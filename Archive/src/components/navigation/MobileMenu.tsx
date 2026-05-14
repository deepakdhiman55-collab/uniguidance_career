"use client";

import { Fragment } from "react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { X, ChevronDown } from "lucide-react";
import { NAVIGATION } from "./NavData";
import { cn } from "@/lib/utils";
import { useCounselingModal } from "@/components/CounselingModalProvider";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  const { openModal } = useCounselingModal();
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[200] lg:hidden" onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 flex justify-end">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="relative flex w-full max-w-sm flex-col overflow-y-auto bg-white dark:bg-[#010409] shadow-2xl py-6 pb-24">
              <div className="flex items-center justify-between px-6 mb-8">
                <span className="text-xl font-bold dark:text-white text-gray-900">Menu</span>
                <button
                  type="button"
                  className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="px-4">
                <div className="space-y-1">
                  {NAVIGATION.map((item) => (
                    <div key={item.name}>
                      {item.type === "link" ? (
                        <a
                          href={item.href}
                          className="block px-3 py-3 rounded-lg text-base font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-white/5"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Disclosure as="div" className="space-y-1">
                          {({ open }) => (
                            <>
                              <Disclosure.Button className="flex w-full items-center justify-between px-3 py-3 rounded-lg text-base font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-white/5">
                                {item.name}
                                <ChevronDown
                                  className={cn(
                                    "h-5 w-5 text-gray-500 transition-transform duration-200",
                                    open ? "rotate-180" : ""
                                  )}
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className="px-4 pt-2 pb-4 space-y-2">
                                {item.items?.map((subItem) => (
                                  <a
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 group"
                                  >
                                    {subItem.icon && (
                                      <subItem.icon className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-[var(--gold-accent)]" />
                                    )}
                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
                                      {subItem.name}
                                    </span>
                                  </a>
                                ))}
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Sticky bottom CTA for Mobile */}
              <div className="fixed bottom-0 left-0 w-full max-w-sm p-4 bg-white/90 dark:bg-[#010409]/90 border-t border-black/5 dark:border-white/10 backdrop-blur-md">
                <button 
                  onClick={() => {
                    openModal();
                    setIsOpen(false);
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 dark:from-[var(--gold-accent)] dark:to-amber-500 text-white dark:text-black font-bold text-center shadow-lg hover:shadow-xl transition-all"
                >
                  Book Now
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
