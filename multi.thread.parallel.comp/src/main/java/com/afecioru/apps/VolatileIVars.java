package com.afecioru.apps;


public class VolatileIVars {
    private static class ProcessingThread  extends Thread {
        private final String name;

        // volatile here ensures that both the main thread and
        // this thread use the same value stored in RAM
        // (not the  one the local CPU cache)
        volatile private boolean flag = false;

        public boolean isFlag() {
            return flag;
        }

        public void setFlag(boolean flag) {
            System.out.println("Setting flag to: " + flag);
            this.flag = flag;
        }

        ProcessingThread(String name) {
            this.name = name;
        }

        @Override
        public void run() {
            for (int i = 0; i < 10; i++) {
                System.out.println("[" + name +"] Processing: " + i + " (flag: " + isFlag() + ")");

                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    public static void main(String[] args) throws InterruptedException {
        ProcessingThread thread = new ProcessingThread("TH-1");
        thread.start();

        Thread.sleep(3000);
        thread.setFlag(true);

        thread.join();
    }
}
